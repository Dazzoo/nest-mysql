import { IsNotEmpty } from "class-validator";

export default class {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}