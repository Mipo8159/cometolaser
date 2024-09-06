export interface IMiscCard {
  id?: number;
  initial: {
    head: string;
    mobile: boolean;
  };
  body: {
    head: string;
    email: boolean;
  };
  extra?: string;
  mg?: number;
}
