export default abstract class Service<CreateDTO, Entity> {
    abstract loadingIds : Map<string, boolean>;
    abstract create(entity: CreateDTO, callback?: (r: Entity) => void) : Promise<void>;
    abstract get(id : string, callback?: (r: Entity) => void) : Promise<void>;
    abstract update(updatedEntity: Entity, callback?: () => void): Promise<void>;
    abstract delete(id: string, callback?: () => void): Promise<void>;
}