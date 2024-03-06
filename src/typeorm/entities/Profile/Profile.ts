import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    date_of_birth: string;

    @Column()
    phone_number: string;

}