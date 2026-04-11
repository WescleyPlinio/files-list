import { IsDateString, IsString, IsUrl } from "class-validator"

export class CreateFileDto {
    
    @IsString()
    name!: string;

    @IsUrl()
    url!: string; 

    @IsString()
    type!: string; 

    @IsString()
    size!: number; 

    @IsDateString()
    createdAt!: string; 

}
