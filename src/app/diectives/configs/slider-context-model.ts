export interface SliderContext {
    $implicit: string;
    controller: {
        next: () => void;
        prev: () => void;
    };
}