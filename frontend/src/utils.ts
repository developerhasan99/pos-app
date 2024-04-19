import PocketBase from 'pocketbase';

export const pb = new PocketBase ('http://127.0.0.1:8090');

export const validateEmail = (value: string) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !regex.test(value)) {
        return 'Please enter a valid email address';
    }
    return true;
};
