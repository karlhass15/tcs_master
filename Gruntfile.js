module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            admin: {
                src: 'client/scripts/login.js',
                dest: 'server/public/assets/scripts/admin.min.js'
            },
            controller1: {
                src: 'client/scripts/controllers/ContactFormController.js',
                dest: 'server/public/assets/scripts/controllers/ContactFormController.min.js'
            }

        },
        copy: {
            bootstrap_css: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css',
                src: ['bootstrap.min.css',
                'bootstrap.min.css.map'],
                "dest": "server/public/assets/vendors/"
            },

            bootstrap_js: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/js',
                src: 'bootstrap.min.js',
                "dest": "server/public/assets/vendors/"
            },

            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/dist',
                src: ['jquery.min.js',
                    'jquery.min.map'],
                "dest": "server/public/assets/vendors/"
            },

            jquery_ui: {
                expand: true,
                cwd: 'node_modules/jquery-ui',
                src: 'jquery-ui.js',
                "dest": "server/public/assets/vendors/"
            },

            jquery_ui_css: {
                expand: true,
                cwd: 'node_modules/jquery-ui/themes',
                src: 'smoothness/*',
                "dest": "server/public/assets/vendors/"
            },

            html: {
                expand: true,
                cwd: "client",
                src: "views/*.html",
                dest: "server/public/assets/"
            },

            style: {
                expand: true,
                cwd: "client",
                src: 'styles/style.css',
                dest: 'server/public/assets/'
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};