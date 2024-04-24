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

    @ManyToOne(() => User, (user) => user.outgoingTransactions, {eager: true})
    source: UserDTO;

    @ManyToOne(() => User, (user) => user.incomingTrannsaction, {eager: true})
    destination: UserDTO;

}