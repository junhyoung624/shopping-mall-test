import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSample = create(
    persist((set, get) => ({
        // 변수
        user: null,
        isLogin: false,
        temp: "임시값",
        // 메서드

    }), 
        {
            keyname: "저장할 키명",
            // 전체가 아니라 특정 상태만 저장하고 싶을 때
            partialize: (state)=> ({
                user: state.user,
                isLogin: state.isLogin
            })
        }
    )
)