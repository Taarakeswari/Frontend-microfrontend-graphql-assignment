type EventCallback = (data: any) => void;

const listeners: Record<string, EventCallback[]> = {};

export const EventBus = {
  on(event: string, cb: EventCallback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(cb);
  },
  off(event: string, cb: EventCallback) {
    listeners[event] = listeners[event]?.filter(fn => fn !== cb) || [];
  },
  emit(event: string, data: any) {
    listeners[event]?.forEach(cb => cb(data));
  }
};
