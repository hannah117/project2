export interface Task {
    id: string;
    title: string;
    description: string
    dueDate: Date;
  }


  export class Task {

      constructor(
        public id: string,
        public title: string,
        public description: string,
      ) {  }
    
  }