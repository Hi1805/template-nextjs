export interface Example {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum ActionType {
  GET_DETAIL = 'example/get_example',
}

export interface ExampleState {
  examples: Example[];
}
