import {getConnection} from 'typeorm';
import {User} from '../../entity/User';

export function saveOrUpdate(user: User): Promise<User> {
    return new Promise(async (resolve, reject) => {
        try {        
            await getConnection().manager.save(user);
            resolve(user);
        } catch(e) {
            reject(e);
        }
    });
}

export function findBy(id: number): Promise<User> {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await getConnection().getRepository(User).find({where: {id: id}});

            if(user.length === 1) 
                resolve(user[0]);
            else
                reject("multiple result exception on a unique id.");
        } catch(e) {
            reject(e);
        }
    });
}