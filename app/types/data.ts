import { ObjectID } from "bson";

export type UserProfile = {
	_id: ObjectID
	_userId: string
	email: string,
    role: "globalAdmin" | "customer" | "enterprise" | "regulatory",
	emailVerified: boolean
}

