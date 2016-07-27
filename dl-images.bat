@ECHO OFF
setlocal enabledelayedexpansion
for /L %%n in (1,1,20) do (
    SET ID=%%n
    IF %%n LSS 10 (
        SET ID=00%%n
    ) ELSE (
        IF %%n LSS 100 (
            SET ID=0%%n
        ) ELSE (
            SET ID=%%n
        )
    )
    WGET -O dist/images/pokemon/%%n.png http://assets.pokemon.com/assets/cms2/img/pokedex/full/!ID!.png
)
