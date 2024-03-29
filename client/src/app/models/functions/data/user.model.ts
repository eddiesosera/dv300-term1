import { Skateboard } from "./skateboard.model";

export interface User {

    name: string;
    surname: string;
    email: string;
    isEmailVerified: boolean;
    avatar: string;
    password: string;
    dateJoined: string;
    isUserGlobalAdmin: boolean;
    isUserLocalAdmin: boolean;
    location: Location
    skateboard: Skateboard[]
}
