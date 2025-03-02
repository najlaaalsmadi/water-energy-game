# استخدم صورة رسمية لـ .NET Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# استخدم صورة SDK لإنشاء التطبيق
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["water-energy-game.csproj", "./"]
RUN dotnet restore "./water-energy-game.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build -c Release -o /app/build

# نشر التطبيق
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

# تشغيل التطبيق
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "water-energy-game.dll"]
