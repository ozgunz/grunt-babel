module.exports = function(grunt){
	grunt.initConfig({
		babel: {
			options: {
			  sourceMap: false,
			  presets: ['@babel/preset-env']
			},
			dist: {
			  files: {
				'app.js': 'js/scripts.js'
			  }
			}
		},
		uglify: {
			group1: {
				files: {
					'app.min.js' : ['app.js']
				}
			}
		}, // Minify JS*/
		sass : {
			group1: {
				files: {
					'css/view.css' : 'css/view.scss'
				}
			}
		}, // SASS
		serve: {
			options: {
				port: 9000
			}
		},
		watch: {
			css: {
				files: 'css/*.scss', 
				tasks: ['sass','cssmin'],
				options: {
                	livereload: 11241
				},
			},
			uglify:{
				files: 'js/scripts.js',
				tasks: ['uglify']
			},
			babel : {
				files: 'js/scripts.js',
				tasks : ['babel']
			}
		},
		cssmin: {
			group1: {
				files: {
					'css/view.min.css' : ['css/view.css']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', ['uglify','babel','cssmin','sass', 'serve', 'watch']);
}