import { IsNotEmpty } from "class-validator";

export default class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}