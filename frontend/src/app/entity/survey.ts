/*Author: Leanna Persaud
This program uses an interface to create a Survey object.
*/

export interface Survey {
    id?: number;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    telephone: string;
    email: string;
    date: string;
    liked: string;
    interest: string;
    likelihood: string;
    comments: string;
}
