export interface EntityAttributes {
    createdAt : Date;
    updatedAt : Date;
}

export default class Entity implements EntityAttributes{
    createdAt : Date;
    updatedAt : Date;

    constructor(createdAt : Date, updatedAt : Date) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}