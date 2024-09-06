export interface IContactCard {
  id?: number;
  title: string;
  body: {
    head: string;
    mobile?: boolean;
    email?: boolean;
  };
}
