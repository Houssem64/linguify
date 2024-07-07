export { };

// Create a type for the roles
export type Verified = "true" | "false";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            verified?: Verified
        };
    }
}