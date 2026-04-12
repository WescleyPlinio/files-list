import { IsDateString, IsNumber, IsString, IsUrl } from "class-validator"
import { CreateDateColumn } from "typeorm";

export class CreateFileDto {
    
    @IsString()
    name!: string;

    @IsUrl()
    url!: string; 

    @IsString()
    type!: string; 

    @IsNumber()
    size!: number; 

    @CreateDateColumn()
    createdAt!: Date; 

}
