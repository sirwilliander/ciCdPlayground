pipeline {
    agent any

   tools {
        nodejs 'yarn'
    }

    stages {

         stage('install and checkout') {
            steps {
                git 'https://github.com/sirwilliander/ciCdPlayground.git'
                sh 'yarn'
                sh 'yarn build'
            }
        }

        stage('Unit test') {
            steps {
                sh 'yarn test'
            }
        }

        stage('Integration test') {
            steps {
                sh 'yarn test:e2e'
            }
        }
        post {
            success{
                junit '**/reports/**/*.xml'
            }
        }
    }
}
