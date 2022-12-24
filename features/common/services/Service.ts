export default abstract class Service<CreateDTO, DTO> {
    abstract loadingIds : Map<string, boolean>;
    abstract create(entity: CreateDTO, callback?: (r: DTO) => void) : Promise<void>;
    abstract get(id : string, callback?: (r: DTO) => void) : Promise<void>;
    abstract update(updatedEntity: DTO, callback?: (r: DTO) => void): Promise<void>;
    abstract delete(id: string, callback?: () => void): Promise<void>;
}