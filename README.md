<h1> Utilisation du Git Hub et Workflow </h1>

<h2> Nécessaire pour travailler sur le site web :</h2>
<ul>
    <li>PHP en version 7.2 ou plus, doit également être présent dans les variables d'environnement (PATH)</li>
    <li>Pour verifier la présence de PHP : dans l'invité de commande tapez : php -v, qui doit vous rendre la version de PHP</li>
    <li>NodeJS, doit également être présent dans les variables d'environnement (PATH)</li>
    <li>Pour verifier la présence de NodeJS : dans l'invité de commande tapez : node -v, qui doit vous rendre la version de node</li>
    <li>Composer et Laravel</li>
    <li>Xampp ou Wampp</li>
</ul>

<h2>Base de donnée :</h2>
<p>Lancez Wampp ou Xampp et selectionnez phpMyAdmin</p>
//img here
<p>créez une base de données au nom de "laravel" en remplacant latin_swedish par utf8_general_ci dans la liste</p>
//img here
<p>Avoir un utilisateur au nom : root et sans mot de passe</p>
//img here

<h2>Premiere recupération du code : (A faire une seule fois)</h2>
<ul>
    <li>Dans l'invité de commande tapez : git clone https://github.com/HBCBProject/HBCBWebApp.git</li>
    <li>Un dossier a été créer, au nom HBCBproject, clic droit -> ouvrir avec VSCode</li>
    <li>Une fois dans VSCODE, tapez dans le terminal de VSCODE :
        //img here
        <ul>
            <li>composer update</li>
            <li>npm install</li>
            <li>php artisan key:generate</li>
            <li>php artisan migrate</li>
        </ul>
    </li>
</ul>

<h2>Pour lancez le site web :</h2>
<ul>
    <li>Dans le terminal de VSCODE tapez : npm run watch</li>
    <li>Dans le terminal toujours tapez : php artisan serve</li>
    <li>Le site doit normalement être disponible a l'url : http://localhost:8000</li>
</ul>

<h2>Travailler et partager son code avec github :</h2>
<ul>
    <li>Avant de creer une nouvelles branch : pensez a pull la branch "develop" (en bas a gauche)</li>
    //img here
    <li>Pour créer une nouvelle branch :
        <ul>
            <li>TOUJOURS a partir de la branche develop</li>
            <li>Cliquez sur develop (en bas a gauche)</li>
            //img here
            <li>Cliquez sur "new branch" (en haut au milieu) puis rentrez le nom de votre nouvelle branch</li>
            //img here
            <li>Le nom de la branch sur laquelle vous êtes est écris en bas a gauche</li>
        </ul>
    </li>
    <li>Une fois les modifications terminez :
        <ul>
            <li>Dans l'onglet "Source control"</li>
            <li>Validez les changes en cliquant sur le +</li>
            //img here
            <li>Rentrez une breve descriptions des changements puis cliquez sur le signe validez</li>
            <li>Allez dans l'onglet "GitHub Pull Request"</li>
            <li>Cliquez sur le +</li>
            <li>La branch proposez doit être "develop", validez</li>
            <li>Rentrez le nom de la nouvelles branch, validez </li>
            <li>La nouvelle pull request doit apparaitre dans l'onglet "pull request" sur github</li>
            <li>Il faudra peut être validez la PR en cliquand sur "compare and pull" puis "create...", en s'assurant que la base est sur "develop"</li>
        </ul>
    </li>
</ul>
