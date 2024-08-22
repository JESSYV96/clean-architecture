import { quizzStore } from "@jessy/application";
import { QuizzRepository } from "@jessy/infrastructure";
import { useDispatch } from "react-redux";

export const store = quizzStore({ quizzService: new QuizzRepository() })

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types


