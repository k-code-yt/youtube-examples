# Server-Sent Events (SSE) with NestJS

An educational project demonstrating Server-Sent Events (SSE) implementation using NestJS backend and vanilla HTML/JavaScript frontend.

## 🎯 What You'll Learn

- How to implement Server-Sent Events in NestJS
- Real-time data streaming from server to client
- Proper connection management and cleanup
- Building a simple SSE testing interface

## 🔧 How It Works

### Backend (NestJS)

The SSE endpoint is implemented in `app.controller.ts`:

```typescript
@Controller('event')
export class AppController {
  @Sse('timer')
  addTimer(@Req() request): Observable<MessageEvent> {
    // Creates an interval that sends time updates every second
    // Properly handles client disconnection with cleanup
  }
}
```

**Key Features:**

- ✅ Real-time timer updates every second
- ✅ Automatic cleanup on client disconnect
- ✅ Proper error handling and logging
- ✅ Uses RxJS for reactive programming

### Frontend (HTML/JavaScript)

The testing interface provides:

- 🔗 Customizable SSE endpoint URL
- 📊 Connection status monitoring
- 📈 Real-time statistics (message count, connection time)
- 📝 Activity logging
- 🎛️ Simple connect/disconnect controls

## 🌐 API Endpoints

| Method | Endpoint       | Description                            |
| ------ | -------------- | -------------------------------------- |
| GET    | `/event/timer` | SSE endpoint that streams time updates |

### SSE Message Format

```json
{
  "type": "time-change",
  "data": {
    "time": "2025-01-15T10:30:45.123Z"
  }
}
```

## 🧪 Testing the Implementation

1. **Start the server:**

```bash
yarn start:dev
```

2. **Test with curl:**

```bash
curl -N -H "Accept: text/event-stream" http://localhost:3000/event/timer
```

3. **Test with the HTML interface:**
   - Open `sse-tester.html`
   - Connect to `http://localhost:3000/event/timer`
   - Watch real-time updates

## 💡 Use Cases for SSE

Server-Sent Events are perfect for:

- **Real-time dashboards** - Stock prices, analytics
- **Live notifications** - Chat messages, alerts
- **Progress updates** - File uploads, long-running tasks
- **Live feeds** - News updates, social media feeds
- **Monitoring systems** - Server metrics, log streams

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Make sure your frontend is served from the same origin
   - Or configure CORS in your NestJS application

2. **Connection Drops:**
   - Check network stability
   - Verify server is running on correct port
   - Review browser console for errors

3. **No Messages Received:**
   - Verify the endpoint URL is correct
   - Check server logs for connection status
   - Ensure Accept header is set to `text/event-stream`

## 🎓 Learning Resources

- [MDN - Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [NestJS SSE Documentation](https://docs.nestjs.com/techniques/server-sent-events)
- [EventSource API Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)

## 📺 Video Tutorial

Watch the complete tutorial on YouTube: [Building Real-Time Apps with Server-Sent Events](https://youtube.com/@k-code-yt)

## 🔗 Links

- **GitHub Repository:** https://github.com/k-code-yt/youtube-examples/tree/sse-example
- **YouTube Channel:** https://youtube.com/@k-code-yt
- **NestJS Documentation:** https://docs.nestjs.com/
