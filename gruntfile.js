var libsJs = [
    'static/src/lib/jquery/dist/jquery.min.js'
]

var libCss = []

module.exports = function(grunt) {

    // Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'static/js/script-min.js': ['static/src/js/*.js'],
                    'static/lib/lib-min.js': libsJs
                }
            },
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                files: {
                    'static/js/script-min.js': ['static/src/js/*.js'],
                    'static/lib/lib-min.js': libsJs
                }
            }
        },
        concat: {
            dist: {
                src: libCss,
                dest: 'static/src/lib/lib.css'
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'static/css/style.css': 'static/src/css/main.scss',
                    'static/css/lib.css': 'static/src/lib/lib.css'
                }
            },
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'static/css/style.css': 'static/src/css/main.scss',
                    'static/css/lib.css': 'static/src/lib/lib.css'
                }
            }
        },
        watch: {
            js: {
                files: ['static/src/js/*.js'],
                tasks: ['uglify:dev']
            },
            css: {
                files: ['static/src/css/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Register task(s)
    grunt.registerTask('default', ['uglify:dev', 'concat', 'sass:dev']);
    grunt.registerTask('build', ['uglify:build', 'concat', 'sass:build']);

};
