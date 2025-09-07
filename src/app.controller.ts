import { Controller, Logger, Sse, MessageEvent, Req } from '@nestjs/common';
import { interval, map, Observable, Subject, takeUntil, tap } from 'rxjs';

@Controller('event')
export class AppController {
  @Sse('timer')
  addTimer(@Req() request): Observable<MessageEvent> {
    let cleanup$ = new Subject<void>();
    const invrl = interval(1000).pipe(
      takeUntil(cleanup$),
      map(() => ({
        data: {
          time: new Date().toISOString(),
        },
        type: 'time-change',
      })),
      tap((e: any) => {
        Logger.log(e.data, 'SSE:SENT');
      }),
    );

    Logger.debug('CONNECTED', 'SSE:STATE');

    request.on('close', () => {
      if (cleanup$) {
        cleanup$.next();
        cleanup$.complete();
        (cleanup$ as any) = null;
        Logger.debug('DISCONNECTED', 'SSE:STATE');
      }
    });

    return invrl;
  }
}
