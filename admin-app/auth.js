import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"

initializeApp({
    projectId: "demo-project",
});

async function main() {
    await getAuth()
        .createUser({
            email: 'user@example.com',
            emailVerified: false,
            phoneNumber: '+11234567890',
            password: 'secretPassword',
            displayName: 'John Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false,
        })
}

main()