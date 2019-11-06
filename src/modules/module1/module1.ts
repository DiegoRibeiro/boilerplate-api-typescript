import { responseOperation, operation, errorCodes, params, userModel } from './Imodule1';
import { User } from '../../entity/User';
import { saveOrUpdate } from '../database/user';

export function doMath(mode: operation, params: params): responseOperation {
    let response: responseOperation = {};

    switch(mode) {
        case operation.ADDITION:
            response.result = params.a + params.b;
            break;
        case operation.SUBTRACTION:
            response.result = params.a - params.b;
            break;
        case operation.MULTIPLICATION:
            response.result = params.a * params.b;
            break;
        case operation.DIVISION:
            if(params.b > 0)
                response.result = params.a / params.b;
            else {
                response.errorCode = errorCodes.DIVISION_BY_ZERO;
                response.errorMessage = "division by zero";
            }
            break;
        default:
            response.errorCode = errorCodes.UNSUPPORTED_OPERATION;
            response.errorMessage = "unsupported operation";
    }

    return response;
}

export function registerUser(userModel: userModel): Promise<User> {
    try {
        const userEntity = new User();

        userEntity.firstName = userModel.firstName;
        userEntity.lastName = userModel.lastName;
        userEntity.age = userModel.age;

        return saveOrUpdate(userEntity);
    } catch(e) {
        // need to process error so the sql errors will not be expose
        Promise.reject(e);
    }
}