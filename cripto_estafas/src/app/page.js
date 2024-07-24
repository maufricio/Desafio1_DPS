"use client"
import React from "react";
import ScamList from "@/app/components/ScamList"

export default function Page() {
    return (
        <div>
            <h1 className="tituloPrincipal">Lista de Estafas en Criptomonedas</h1>
            <ScamList> </ScamList>
        </div>
    );
}