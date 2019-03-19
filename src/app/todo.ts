export class Todo {
    constructor(
        public name: string,
        public technology: string[],
        public description: string,
        public customer: string,
        public id?: string
    ) {}
  }
