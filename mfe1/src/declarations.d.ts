declare module 'mfe2/events' {
  export const EventBus: {
    on: (event: string, callback: (payload: any) => void) => void;
    off: (event: string, callback: (payload: any) => void) => void;
    emit: (event: string, payload: any) => void;
  };
}
