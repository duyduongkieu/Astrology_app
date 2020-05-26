export class ChangePageEvent {
  public name: string;
  public title: string;

  constructor(fields?: Partial<ChangePageEvent>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
