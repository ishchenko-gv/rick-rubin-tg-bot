import 'reflect-metadata';
import { Container } from 'typedi';
import * as dotenv from 'dotenv';
import { Telegram } from './components/telegram/telegram';
import { RickService } from './components/rick/rick.service';

dotenv.config();

new Telegram(Container.get(RickService)).start();
