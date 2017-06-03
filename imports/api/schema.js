import { Random } from 'meteor/random';
import { UserResolvers, UserSchema } from './User';
import { PostResolvers, PostSchema } from './Post';
import { InviteResolvers, InviteSchema } from './Invite';
import { LikeResolvers, LikeSchema } from './Like';
import { MessageResolvers, MessageSchema } from './Message';
import { FriendRequestResolvers, FriendRequestSchema } from './FriendRequest';
import { FriendResolvers, FriendSchema } from './Friend';
import { merge } from 'lodash';


export const BaseSchemas = [`
type Geometry {
	    type: String!
	    coordinates: [Int]
	}

scalar Date

input LocationData {
	street1: String
	street2: String
	postal: String
	country: String
	city: String
	state: String
	suburb: String
}

input ImageObject {
	fileType: String
	name: String
	uid: String
	url: String
}

type Address {
	    fullAddress: String!
	    lat: String
	    lng: String
	    geometry: Geometry
	    placeId: String
	    street: String
	    city: String
	    state: String
	    zip: Int
	    country: Int
	    maps_url: String
	}
`];


export const BaseResolvers = {
  	Date: {
	  __parseValue(value) {
	    return new Date(value); // value from the client
	  },
	  __serialize(value) {
	    return value.toISOString(); // value sent to the client
	  },
	  __parseLiteral(ast) {
	    return ast.value;
	  },
	},
};

export const typeDefs = [
	...BaseSchemas,
	...UserSchema, 
	...PostSchema,
	...MessageSchema,
	...LikeSchema,
	...FriendRequestSchema,
	...FriendSchema
];


export const resolvers = merge(
	BaseResolvers,
	UserResolvers, 
	PostResolvers,
	MessageResolvers,
	LikeResolvers,
	FriendRequestResolvers,
	FriendResolvers
);


