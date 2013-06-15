module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // sass: {
    //   options: {
    //     style: 'expanded'
    //   },
    //   files: {
    //     'css/master.css': [
    //       'sass/ui/tableview.scss'
    //     ]
    //   }
    // },
    sass: {
       dist: {
           options: {
               style: 'expanded' // Compassライブラリを使用
           },
           files: {
               'css/master.css': [
                   'sass/setting/*',
                   'sass/controls/*',
                   'sass/views/*'
                ],
               'css/template.css': 'sass/template.scss'
           }
       }
   },
    watch: {
      files: ['sass/**/*.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};