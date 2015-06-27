'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');

	var srcFiles=['Gruntfile.js', './app/**/*.jsx', './app/**/*.css'];

	grunt.initConfig({

		webpack: {
			client:{
				entry: __dirname + '/app/js/client.jsx',
				output: {
					path: 'build/',
					file: 'bundle.js'
				},
				module:{
		          loaders:[
		            {
		              test:/\.jsx$/,
		              loader: 'jsx-loader'
		            }
		          ]
        		}
			}
		},

		copy: {
		      html: {
		        cwd: 'app/',
		        expand: true,
		        flatten: false,
		        src: '**/*.html',
		        dest: 'build/',
		        filter: 'isFile'
		      },
		      css: {
		        cwd: 'app/css',
		        expand: true,
		        flatten: false,
		        src: '**/*.css',
		        dest: 'build/',
		        filter: 'isFile'
		    }
	    },

	    clean: {
	      dev: {
	        src: 'build/'
	      }
	    },

		nodemon: {
			dev: {
				src: srcFiles
			}
		},

		watch: {
			files: srcFiles,
			html: {
                files: ['./app/**/*.html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['./app/**/*.css'],
                options: {
                    livereload: true
                }
            },
			tasks: ['webpack:client', 'copy:html', 'copy:css']
		}

	});

	grunt.registerTask('build:dev', ['webpack:client', 'copy:html', 'copy:css']);
	grunt.registerTask('build', ['build:dev']);
	grunt.registerTask('default', ['build']);

}