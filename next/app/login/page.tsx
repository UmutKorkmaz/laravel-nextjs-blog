"use client";

import React from "react";

export default function Page() {
    return (
        <div className="prose dark:prose-invert">
            <h1>Giriş Yap</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <label htmlFor="password">Şifre</label>
                <input id="password" type="password" />
                <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}>Giriş Yap</button>
            </form>
        </div>
    );
}
