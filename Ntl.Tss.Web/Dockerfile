#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["SiS.iOPS2.Authorization/SiS.iOPS2.Authorization.csproj", "SiS.iOPS2.Authorization/"]
RUN dotnet restore "SiS.iOPS2.Authorization/SiS.iOPS2.Authorization.csproj"
COPY . .
WORKDIR "/src/SiS.iOPS2.Authorization"
RUN dotnet build "SiS.iOPS2.Authorization.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SiS.iOPS2.Authorization.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SiS.iOPS2.Authorization.dll"]