import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {BankTransferDTO, UserDTO} from '../../../models';
import { User } from './User';

@Entity()
export class BankTransfer implements BankTransferDTO {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;
    
    @CreateDateColumn()
    timestamp: string;

    @ManyToOne(() => User, (user) => user.outgoingTransactions)
    source: UserDTO;


    destination: UserDTO;

}