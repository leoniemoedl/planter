export default abstract class Service<CreateDTO, DTO> {
    abstract create(entity: CreateDTO, callback?: (r: DTO) => void): Promise<DTO>;
    abstract get(id : string, callback?: (r: DTO) => void): Promise<DTO>;
    abstract update(updatedEntity: DTO, callback?: (r: DTO) => void): Promise<void>;
    abstract delete(id: string, callback?: (id: string) => void): Promise<void>;
}