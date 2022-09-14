import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    descriptions = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, descriptions, completed, level){
        this.name = name;
        this.descriptions = descriptions;
        this.completed = completed;
        this.level = level
    }

}