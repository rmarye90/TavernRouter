# Bot Discord - Liens Réseaux Sociaux

Un bot Discord simple qui permet de partager les liens de vos différents réseaux sociaux via des commandes.

## 🚀 Fonctionnalités

- **Commandes slash** : `/liens` et `/lien <réseau>`
- **Commandes avec préfixe** : `!liens`, `!instagram`, `!twitter`, etc.
- **Embeds Discord** avec design attrayant
- **Configuration facile** des liens dans `config.js`

## 📋 Installation

1. **Clonez le projet** ou téléchargez les fichiers
2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Créez votre bot Discord** :
   - Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
   - Créez une nouvelle application
   - Allez dans la section "Bot"
   - Créez un bot et copiez le token

4. **Configurez le bot** :
   - Ouvrez le fichier `.env`
   - Remplacez `VOTRE_TOKEN_ICI` par le token de votre bot
   - Modifiez les liens dans `config.js` avec vos vrais liens

5. **Invitez le bot sur votre serveur** :
   - Dans le Developer Portal, allez dans "OAuth2" > "URL Generator"
   - Sélectionnez "bot" et "applications.commands"
   - Sélectionnez les permissions nécessaires (Send Messages, Embed Links)
   - Utilisez l'URL générée pour inviter le bot

## ⚙️ Configuration

Modifiez le fichier `config.js` pour personnaliser vos liens :

```javascript
const socialLinks = {
    instagram: "https://www.instagram.com/votre_compte",
    twitter: "https://twitter.com/votre_compte",
    // ... autres liens
};
```

## 🎮 Utilisation

### Commandes Slash
- `/liens` : Affiche tous les liens de réseaux sociaux
- `/lien <réseau>` : Affiche un lien spécifique

### Commandes avec Préfixe (!)
- `!liens` : Affiche tous les liens
- `!instagram` : Affiche le lien Instagram
- `!twitter` : Affiche le lien Twitter
- etc.

## 📱 Réseaux Supportés

- Instagram
- Twitter/X
- Facebook
- TikTok
- YouTube
- LinkedIn
- Twitch
- Discord
- GitHub
- Site Web
- Blog

## 🏃‍♂️ Démarrage

```bash
# Mode normal
npm start

# Mode développement (avec redémarrage automatique)
npm run dev
```

## 🛠️ Technologies Utilisées

- **Node.js**
- **Discord.js v14**
- **dotenv** pour la gestion des variables d'environnement

## 📝 License

MIT