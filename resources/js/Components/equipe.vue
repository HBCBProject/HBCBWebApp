<template>
<body>
    <div>
    <md-table v-model="users" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
  <ul id="menu-accordeon">
            <li><a href="#">Equipe1</a>
               <ul>
                  <li>Nom  Prenom   Age   Photo </li>
                  <li>Nom  Prenom   Age   Photo </li>
                  <li>Nom  Prenom   Age   Photo </li>
                  <li>Nom  Prenom   Age   Photo </li>
               </ul>
            </li>
             <li><a href="#">Equipe 2</a>
               <ul>
                  <li>Nom  Prenom   Age   Photo</li>
                  <li>Nom  Prenom   Age   Photo</li>
                  <li>Nom  Prenom   Age   Photo</li>
                  <li>Nom  Prenom   Age   Photo</li>
               </ul>
            </li>
         </ul>
  
</body>
</template>

<script>
  export default {
    name: 'TableTemplate',
    data: () => ({
      users: [
        {
          id: 1,
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          gender: 'Male',
          title: 'Assistant Media Planner'
        },
        {
          id: 2,
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          title: 'Account Coordinator'
        },
        {
          id: 3,
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          gender: 'Female',
          title: 'Operator'
        },
        {
          id: 4,
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          gender: 'Male',
          title: 'Software Test Engineer III'
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          gender: 'Female',
          title: 'Paralegal'
        }
      ]
    })
    
  }
 
</script>
<style>
#menu-accordeon {
    padding:0;
    margin:0;
    list-style:none;
    position: absolute;
    bottom: 340px;
    right: 570px;
    width: 180px;
  }
  #menu-accordeon ul {
    padding:0;
    margin:0;
    list-style:none;
    text-align: center;
  }
  #menu-accordeon li {
     background-color:#ffde6f; 
     background-image:-webkit-linear-gradient(top, #ffde6f 0%, rgb(255, 196, 0) 100%);
     background-image: linear-gradient(to bottom, #ffde6f 0%, rgb(255, 196, 0) 100%);
     border-radius: 6px;
     margin-bottom:2px;
     box-shadow: 3px 3px 3px #999;
     border:solid 1px #333A40;
     color: white;
 }
  #menu-accordeon li li {
     max-height:0;
     overflow: hidden;
     transition: all .5s;
     border-radius:0;
     background: #444;
     box-shadow: none;
     border:none;
     margin:0
  }
  #menu-accordeon a {
    display:block;
    text-decoration: none;
    color: #fff;
    padding: 8px 0;
    font-family: verdana;
    font-size:1.2em
  }
  #menu-accordeon ul li a, #menu-accordeon li:hover li a {
    font-size:1em
  }
  #menu-accordeon li:hover {
     background: #729EBF
  }
  #menu-accordeon li li:hover {
     background: #999;
  }
  #menu-accordeon ul li:last-child {
     border-radius: 0 0 6px 6px;
     border:none;
  }
  #menu-accordeon li:hover li {
    max-height: 15em;
  }

</style>