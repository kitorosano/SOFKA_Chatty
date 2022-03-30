import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../services/firebase';

export async function signup(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signin(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}

export async function signInWithGitHub() {
  const provider = new GithubAuthProvider();
  return await signInWithPopup(auth, provider);
}