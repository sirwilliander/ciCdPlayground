pipeline {
    agent any

   tools {
        nodejs 'yarn'
    }

    stages {

         stage('install and checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sirwilliander/ciCdPlayground.git'
                sh 'yarn'
                sh 'yarn build'
            }
        }

        stage('Unit test') {
            steps {
                sh 'yarn test'
            }
            post {
                success{//success helyett always is lehet
                junit '**/reports/**/*.xml'
            }
        }

        stage('Integration test') {
            steps {
                sh 'yarn test:e2e'
            }

            post {
                success{//success helyett always is lehet
                junit '**/reports/**/*.xml'
            }
         }
        }
    }
}
