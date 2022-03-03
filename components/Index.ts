import Main from 'components/Main';
import { useEffect } from 'react';
import 'phaser';

export default function Index() {
    useEffect(() => {
        loadGame()
    }, []);

    const loadGame = async () => {
        if (typeof window !== 'object') {
            return;
        }

        var config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            // width: window.innerWidth * window.devicePixelRatio,
            // height: window.innerHeight * window.devicePixelRatio,
            backgroundColor: '#3498db',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 },
                },
            },
            parent: 'game',

            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            }
        };

        var game = new Phaser.Game(config);

        game.scene.add('main', Main);
        game.scene.start('main');
    }

    return null;
}