export const environment = {
    production: false,
    MARVEL_API: {
        URL: 'https://gateway.marvel.com:443',
        PUBLIC_KEY: '4c222e4acced7829e9cb558007de8d57',
        PRIVATE_KEY: 'ea30411d3ad679c23f17820cb0322fb468023efc',
    },
};

if (environment.MARVEL_API.PUBLIC_KEY === 'INSERT YOUR KEY FIRST') {
    /**
     * To get access to the marvel API, you need to go to their site and sign up for an account.
     * Go Here: https://developer.marvel.com/
     *
     * Once you have done that, in their portal, you will need to add http://localhost to their
     * whitelisted domains. If you don't do this, it will fail for you.
     */
    document.body.innerHTML =
        'INSERT YOUR KEY FIRST<BR>See <code>environments.ts</code> for instructions';
    throw new Error('You must setup a public and private API key first.');
}
